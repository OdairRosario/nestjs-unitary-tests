import { RepositorioUsuario } from './usuario.repository';
import { ServicoUsuario } from './usuario.service';

const providers = [
  {
    provide: 'RepositorioUsuarioInterface',
    useClass: RepositorioUsuario,
    shouldExport: false,
  },
  {
    provide: 'ServicoUsuarioInterface',
    useClass: ServicoUsuario,
    shouldExport: true,
  },
];

export default providers;
