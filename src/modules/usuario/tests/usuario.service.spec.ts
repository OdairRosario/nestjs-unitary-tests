import { ServicoUsuario } from '../usuario.service';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import { ServicoUsuarioInterface } from '../interfaces/servico-usuario.interface';
import { TestBed } from '@automock/jest';

describe('ServicoUsuario', () => {
  let servico: ServicoUsuarioInterface;

  const mockServicoUsuario = {
    cadastrar: jest.fn(),
    atualizar: jest.fn(),
    deletar: jest.fn(),
    listarTodos: jest.fn(),
  };

  beforeEach(() => {
    const { unit } = TestBed.create(ServicoUsuario).compile();

    servico = unit;
    jest.clearAllMocks();
  });

  describe('cadastrar', () => {
    it('Deveria cadastrar um novo usuário e retorna-lo', async () => {
      // Arrange
      const usuarioDto: CadastrarUsuarioDto = {
        nome: 'Odair Rosario',
        email: 'odair@rosario.com',
      };

      const usuarioCriado: Usuario = {
        id: 1,
        nome: 'Odair Rosario',
        email: 'odair@rosario.com',
      };

      mockServicoUsuario.cadastrar.mockResolvedValue(usuarioCriado);

      // Act
      const resultado = await servico.cadastrar(usuarioDto);

      // Assert
      expect(resultado).not.toBeNull();
      expect(resultado).toEqual(usuarioCriado);
      expect(mockServicoUsuario.cadastrar).toHaveBeenCalledWith(usuarioDto);
    });
  });

  // describe('atualizar', () => {
  //   it('Deveria atualizar um usuário existente e retorna-lo', async () => {
  //     // Arrange
  //     const idUsuario = 1;

  //     const usuarioDto: AtualizarUsuarioDto = {
  //       nome: 'Odair Rosario',
  //       email: 'odair@rosario.com',
  //     };

  //     const usuarioAtualizado: Usuario = {
  //       id: 1,
  //       nome: 'Odair Rosario',
  //       email: 'odair@rosario.com',
  //     };

  //     mockServicoUsuario.atualizar.mockResolvedValue(usuarioAtualizado);

  //     // Act
  //     const resultado = await servico.atualizar(idUsuario, usuarioDto);

  //     // Assert
  //     expect(resultado).not.toBeNull();
  //     expect(resultado).toEqual(usuarioAtualizado);
  //     expect(mockServicoUsuario.atualizar).toHaveBeenCalledWith(
  //       idUsuario,
  //       usuarioDto,
  //     );
  //   });
  // });

  // describe('deletar', () => {
  //   it('Deveria deletar um usuário', async () => {
  //     // Arrange
  //     const idUsuario = 1;

  //     // Act
  //     await servico.deletar(idUsuario);

  //     // Assert
  //     expect(mockServicoUsuario.deletar).toHaveBeenCalledWith(idUsuario);
  //   });
  // });

  // it('Deveria recuperar usuários do banco de dados', async () => {
  //   // Arrange
  //   const mockUsuarios: Usuario[] = [
  //     {
  //       id: 1,
  //       nome: 'Odair Rosario',
  //       email: 'odair@rosario.com',
  //     },
  //     {
  //       id: 2,
  //       nome: 'jhon Doe',
  //       email: 'jhon@doe.com',
  //     },
  //   ];

  //   mockServicoUsuario.listarTodos.mockResolvedValue(mockUsuarios);

  //   // Act
  //   const users = await servico.listarTodos();

  //   // Assert
  //   expect(mockServicoUsuario.listarTodos).toHaveBeenCalled();
  //   expect(users).toEqual(mockUsuarios);
  // });
});
