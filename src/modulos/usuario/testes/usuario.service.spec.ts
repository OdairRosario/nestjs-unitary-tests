import { ServicoUsuario } from '../usuario.service';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import { ServicoUsuarioInterface } from '../interfaces/servico-usuario.interface';
import { TestBed } from '@automock/jest';
import { RepositorioUsuarioInterface } from '../interfaces/repositorio-usuario.interface';
import { ValidadorUsuarioInterface } from '../interfaces/validador-usuario.interface';
import { MapeadorUsuarioInterface } from '../interfaces/mapeador-usuario.interface';
import { BadRequestException } from '@nestjs/common';

describe('Testes Serviço Usuario', () => {
  let servico: ServicoUsuarioInterface;
  let mockRepositorioUsuario: jest.Mocked<RepositorioUsuarioInterface>;
  let mockValidadorUsuario: jest.Mocked<ValidadorUsuarioInterface>;
  let mockMapeadorUsuario: jest.Mocked<MapeadorUsuarioInterface>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(ServicoUsuario).compile();

    servico = unit;
    mockRepositorioUsuario = unitRef.get('RepositorioUsuarioInterface');
    mockValidadorUsuario = unitRef.get('ValidadorUsuarioInterface');
    mockMapeadorUsuario = unitRef.get('MapeadorUsuarioInterface');
  });

  describe('Cadastro', () => {
    it('Deveria cadastrar um novo usuário e retorna-lo', async () => {
      // Arrange
      const usuarioDto: CadastrarUsuarioDto = {
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      const mockUsuario: Usuario = {
        id: 1,
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      mockMapeadorUsuario.mapearDtoCadastrar.mockReturnValue(mockUsuario);
      mockValidadorUsuario.verificaDuplicidadeEmail.mockResolvedValue(false);
      mockRepositorioUsuario.cadastrar.mockResolvedValue(mockUsuario);

      // Act
      const resultado = await servico.cadastrar(usuarioDto);

      // Assert
      expect(resultado).toEqual(mockUsuario);
      expect(mockRepositorioUsuario.cadastrar).toHaveBeenCalled();
      expect(mockValidadorUsuario.verificaDuplicidadeEmail).toHaveBeenCalled();
      expect(mockMapeadorUsuario.mapearDtoCadastrar).toHaveBeenCalled();
    });

    it('Deveria gerar erro indicando duplicidade de e-mail', async () => {
      // Arrange
      const usuarioDto: CadastrarUsuarioDto = {
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      const mockUsuario: Usuario = {
        id: 1,
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      const mensagemErro = 'Já existe um usuário cadastrado com este e-mail';

      mockMapeadorUsuario.mapearDtoCadastrar.mockReturnValue(mockUsuario);
      mockValidadorUsuario.verificaDuplicidadeEmail.mockResolvedValue(true);

      // Act
      const resultado = servico.cadastrar(usuarioDto);

      // Assert
      expect(resultado).rejects.toThrow(new BadRequestException(mensagemErro));
      expect(mockValidadorUsuario.verificaDuplicidadeEmail).toHaveBeenCalled();
      expect(mockMapeadorUsuario.mapearDtoCadastrar).toHaveBeenCalled();
    });
  });
});
