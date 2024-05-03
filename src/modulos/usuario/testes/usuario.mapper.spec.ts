import { TestBed } from '@automock/jest';
import { MapeadorUsuario } from '../mapeadores/usuario.mapper';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import { MapeadorUsuarioInterface } from '../interfaces/mapeador-usuario.interface';

describe('Testes mapeador usuário', () => {
  let mapeadorUsuario: MapeadorUsuarioInterface;

  beforeEach(() => {
    const { unit } = TestBed.create(MapeadorUsuario).compile();

    mapeadorUsuario = unit;
  });

  describe('Mapear entidade cadastro', () => {
    it('Deveria mapear entidade Usuario a partir do CadastrarUsuarioDto', () => {
      // Arrange
      const usuarioDto: CadastrarUsuarioDto = {
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      const usuarioMapeado: Usuario = new Usuario();
      usuarioMapeado.nome = 'Teste';
      usuarioMapeado.email = 'teste@nexen.com';

      // Act
      const resultado = mapeadorUsuario.mapearDtoCadastrar(usuarioDto);

      // Assert
      expect(resultado).toEqual(usuarioMapeado);
      expect(resultado.id).toBeUndefined();
    });
  });
});
