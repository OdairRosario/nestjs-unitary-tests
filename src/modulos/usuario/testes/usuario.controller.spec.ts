import { TestBed } from '@automock/jest';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import { ServicoUsuarioInterface } from '../interfaces/servico-usuario.interface';
import { ControllerUsuario } from '../usuario.controller';

describe('Testes mapeador usuário', () => {
  let controllerUsuario: ControllerUsuario;
  let mockServicoUsuario: jest.Mocked<ServicoUsuarioInterface>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(ControllerUsuario).compile();

    controllerUsuario = unit;
    mockServicoUsuario = unitRef.get('ServicoUsuarioInterface');
  });

  describe('Cadastro', () => {
    it('Deveria cadastrar um novo usuário e retornar', async () => {
      // Arrange
      const usuarioDto: CadastrarUsuarioDto = {
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      const mockUsuario: Usuario = {
        id: 1,
        nome: 'teste',
        email: 'teste@nexen.com',
      };

      mockServicoUsuario.cadastrar.mockResolvedValue(mockUsuario);

      // Act
      const resultado = await controllerUsuario.cadastrar(usuarioDto);

      // Assert
      expect(resultado).toEqual(mockUsuario);
      expect(mockServicoUsuario.cadastrar).toHaveBeenCalledWith(usuarioDto);
    });
  });
});
