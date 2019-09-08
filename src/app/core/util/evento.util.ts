import { Rest } from './rest';
import { HttpParams } from '@angular/common/http';
import { Pageable, EntidadeGenerica, MDBObjectUtil, marcarComoTocado } from 'mdias-componentes';
import { FormGroup, FormBuilder } from '@angular/forms';

export abstract class Evento<T extends EntidadeGenerica> {

    public mask = [/\d/, /\d/, ':', /\d/, /\d/];

    public resultadoPesquisa: Pageable<T>;
    public formularioPesquisa: FormGroup;
    public formularioCadastro: FormGroup;
    public ehEdicao: boolean;
    public id: any;

    constructor(public formBuilder: FormBuilder, public rest: Rest) {
        this.formularioPesquisa = this.getFormularioPesquisa();
        this.formularioCadastro = this.getFormularioCadastro();
        this.ehEdicao = false;
    }

    public pesquisar = (evento: any = { pagina: 0 }): void => {
        if (this.formularioPesquisa.invalid) {
            marcarComoTocado(this.formularioPesquisa);
            return;
        }

        let params: HttpParams = this.getParametrosPesquisa();

        if (params == null) {
            params = new HttpParams();
        }

        if (this.formularioPesquisa.valid) {
            params = params.append('page', String(evento.pagina));
            this.rest.mdbHTTP.consultarPaginado(this.endpoint(), this.montarFiltro(), params)
                .subscribe(pageable => {
                    this.resultadoPesquisa = pageable as Pageable<T>;

                    if (this.resultadoPesquisa.totalElements === 0) {
                        this.rest.mensagemServico.addInformacao('', this.rest.mdbI18N.translate('mensagem.pesquisaNaoEncontrada'), 3000);
                    }
                }
                );
        }
    }

    public salvar = (): void => {

        if (this.formularioCadastro.invalid) {
            marcarComoTocado(this.formularioCadastro);

            for (const key in this.formularioCadastro.controls) {
                this.formularioCadastro.get(key).updateValueAndValidity();
            }

            return;
        }

        this.rest.confirmacaoService.abrirConfirmacao(this.rest.mdbI18N.translate('mensagem.confirmarOperacao'))
            .subscribe(res => {
                if (res) {
                    const entidade: EntidadeGenerica = this.montarEntidade();
                    entidade.id = this.id;
                    this.rest.mdbHTTP.salvar(this.endpoint(), entidade).subscribe(() => {
                        this.redirecionarPaginaPrincipal();
                        this.rest.mensagemServico.addSucesso('', this.rest.mdbI18N.translate('mensagem.salvoComSucesso'));
                    });
                }
            });
    }

    public consultarId = (): void => {
        this.rest.mdbHTTP.consultarPorId(this.endpoint(), this.id).subscribe(resposta => {
            this.formularioCadastro.patchValue(resposta);
        });
    }

    public deletarRegistro = (id: any, confirmacao = false): void => {

        if (!confirmacao) {
            this.rest.mdbHTTP.deletar(this.endpoint(), id).subscribe(resposta => {
                this.rest.mensagemServico.addSucesso('', this.rest.mdbI18N.translate('mensagem.registroDeletadoComSucesso'));
                this.pesquisar();
            });
            return;
        }
        this.rest.confirmacaoService.abrirConfirmacao(this.rest.mdbI18N.translate('mensagem.deletarRegistro'))
            .subscribe(res => {
                if (res) {
                    this.rest.mdbHTTP.deletar(this.endpoint(), id).subscribe(resposta => {
                        this.rest.mensagemServico.addSucesso('', this.rest.mdbI18N.translate('mensagem.registroDeletadoComSucesso'));
                        this.pesquisar();
                    });
                }
            });
    }

    public irParaEdicao(id: number): void {
        throw new Error('Method not implemented.');
    }

    public irParaNovo() {
        throw new Error('Method not implemented.');
    }

    public montarFiltro(): T { return null; }

    public montarEntidade(): T { return null; }
    public redirecionarPaginaPrincipal(): void { }

    public limparEntidade(): void {
        if (this.formularioCadastro) {
            this.formularioCadastro.reset();
        }

        if (this.formularioCadastro) {

            for (const key in this.formularioCadastro.controls) {
                this.formularioCadastro.get(key).updateValueAndValidity();
            }

        }
    }

    public limparResultadoPesquisa(): void {
        this.resultadoPesquisa = new Pageable();
    }

    public getFormularioPesquisa(): FormGroup { return null; }

    public getFormularioCadastro(): FormGroup {
        return null;
    }

    public getParametrosPesquisa(): HttpParams {
        return null;
    }

    public recuperarValor(objeto: T, atributo = null) {
        return MDBObjectUtil.buscarValor(objeto, atributo);
    }

    public recuperarValorFormularioPesquisa(chave: string, atributo = null) {
        return this.recuperarValor(this.formularioPesquisa.get(chave).value, atributo);
    }

    public limparFiltro(): void {
        if (this.formularioPesquisa) {
            this.formularioPesquisa.reset();
        }
    }

    public cancelar(confirmacao = false): void {

        if (!confirmacao) {
            this.redirecionarPaginaPrincipal();
            return;
        }

        this.rest.confirmacaoService.abrirConfirmacao(
            this.rest.mdbI18N.translate('mensagem.cancelar')
        ).subscribe(res => {
            if (res) {
                this.redirecionarPaginaPrincipal();
            }
        });
    }

    public abstract endpoint(): string;
}
