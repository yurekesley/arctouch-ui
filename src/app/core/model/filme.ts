import { Copy } from 'src/app/core/util/copy.util';
import { EntidadeAuditada } from 'mdias-componentes';

export class Filme extends EntidadeAuditada {

    public id: number;

    public title: string;

    public adult: boolean;

    public video: boolean;

    public poster_path: string;

    public overview: string;

    public release_date: Date;

    public vote_average: number;

    public original_title: string;

    public original_language: string;

    public backdrop_path: string;

    public popularity: number;

    public vote_count: number;

    constructor(init: Partial<Filme> = null) {
        super();
        if (init) {
            Copy.deep(this, init);
            Copy.parseDate(this, ['release_date']);
        }
    }

}
