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
  let mockUsuarioValidador: jest.Mocked<ValidadorUsuarioInterface>;
  let mockMapeadorUsuario: jest.Mocked<MapeadorUsuarioInterface>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(ServicoUsuario).compile();

    servico = unit;
    mockRepositorioUsuario = unitRef.get('RepositorioUsuarioInterface');
    mockUsuarioValidador = unitRef.get('ValidadorUsuarioInterface');
    mockMapeadorUsuario = unitRef.get('MapeadorUsuarioInterface');
  });

  describe('Cadastro', () => {
    it('Deveria cadastrar um novo usuário e retorna-lo', async () => {
      // Arrange
      const usuarioDto: CadastrarUsuarioDto = {
        nome: 'Odair Rosario',
        email: 'odair@rosario.com',
      };

      const mockUsuario: Usuario = {
        id: 1,
        nome: 'Odair Rosario',
        email: 'odair@rosario.com',
      };

      mockMapeadorUsuario.mapearDtoCadastrar.mockReturnValue(mockUsuario);
      mockUsuarioValidador.verificaDuplicidadeEmail.mockResolvedValue(false);
      mockRepositorioUsuario.cadastrar.mockResolvedValue(mockUsuario);

      // Act
      const resultado = await servico.cadastrar(usuarioDto);

      // Assert
      expect(resultado).toEqual(mockUsuario);
      expect(mockRepositorioUsuario.cadastrar).toHaveBeenCalled();
      expect(mockUsuarioValidador.verificaDuplicidadeEmail).toHaveBeenCalled();
      expect(mockMapeadorUsuario.mapearDtoCadastrar).toHaveBeenCalled();
    });

    it('Deveria retornar mensagem de erro indicando duplicidade de e-mail', async () => {
      // Arrange
      const usuarioDto: CadastrarUsuarioDto = {
        nome: 'Odair Rosario',
        email: 'odair@rosario.com',
      };

      const mockUsuario: Usuario = {
        id: 1,
        nome: 'Odair Rosario',
        email: 'odair@rosario.com',
      };

      mockMapeadorUsuario.mapearDtoCadastrar.mockReturnValue(mockUsuario);
      mockUsuarioValidador.verificaDuplicidadeEmail.mockResolvedValue(true);

      // Act
      const resultado = servico.cadastrar(usuarioDto);

      // Assert
      expect(resultado).rejects.toThrow(BadRequestException);
      expect(mockUsuarioValidador.verificaDuplicidadeEmail).toHaveBeenCalled();
      expect(mockMapeadorUsuario.mapearDtoCadastrar).toHaveBeenCalled();
    });
  });
});
