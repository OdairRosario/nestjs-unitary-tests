import { MapeadorUsuario } from './mapeadores/usuario.mapper';
import { RepositorioUsuario } from './usuario.repository';
import { ServicoUsuario } from './usuario.service';

const providers = [
  {
    provide: 'RepositorioUsuarioInterface',
    useClass: RepositorioUsuario,
    shouldExport: true,
  },
  {
    provide: 'ServicoUsuarioInterface',
    useClass: ServicoUsuario,
    shouldExport: true,
  },
  {
    provide: 'MapeadorUsuarioInterface',
    useClass: MapeadorUsuario,
    shouldExport: true,
  },
];

export default providers;
