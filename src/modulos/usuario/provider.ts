import { MapeadorUsuario } from './mapeadores/usuario.mapper';
import { RepositorioUsuario } from './usuario.repository';
import { ServicoUsuario } from './usuario.service';
import { ValidadorUsuario } from './validadores/usuario.validator';

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
  {
    provide: 'ValidadorUsuarioInterface',
    useClass: ValidadorUsuario,
    shouldExport: true,
  },
];

export default providers;
