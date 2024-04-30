import { ServicoUsuario } from '../usuario.service';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import { ServicoUsuarioInterface } from '../interfaces/servico-usuario.interface';
import { TestBed } from '@automock/jest';
import { RepositorioUsuarioInterface } from '../interfaces/repositorio-usuario.interface';

describe('Testes Serviço Usuario', () => {
  let servico: ServicoUsuarioInterface;

  let mockRepositorioUsuario: jest.Mocked<RepositorioUsuarioInterface>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(ServicoUsuario).compile();

    servico = unit;

    mockRepositorioUsuario = unitRef.get('RepositorioUsuarioInterface');
  });

  describe('Cadastro', () => {
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

      mockRepositorioUsuario.cadastrar.mockResolvedValue(usuarioCriado);

      // Act
      const resultado = await servico.cadastrar(usuarioDto);

      // Assert
      expect(resultado).toEqual(usuarioCriado);
      expect(mockRepositorioUsuario.cadastrar).toHaveBeenCalled();
    });
  });
});
