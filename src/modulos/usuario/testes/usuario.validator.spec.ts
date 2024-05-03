import { TestBed } from '@automock/jest';
import { Usuario } from '../entidades/usuario.entity';
import { RepositorioUsuarioInterface } from '../interfaces/repositorio-usuario.interface';
import { ValidadorUsuarioInterface } from '../interfaces/validador-usuario.interface';
import { ValidadorUsuario } from '../validadores/usuario.validator';

describe('Testes mapeador usuário', () => {
  let validadorUsario: ValidadorUsuarioInterface;
  let mockRepositorioUsuario: jest.Mocked<RepositorioUsuarioInterface>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(ValidadorUsuario).compile();

    validadorUsario = unit;
    mockRepositorioUsuario = unitRef.get('RepositorioUsuarioInterface');
  });

  describe('Validar duplicidade e-mail', () => {
    it('Deveria retornar que email é duplicado', async () => {
      // Arrange
      const email = 'teste@nexen.com';

      const mockUsuario: Usuario = {
        id: 1,
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      mockRepositorioUsuario.buscarPorEmail.mockResolvedValue(mockUsuario);

      // Act
      const resultado = await validadorUsario.verificaDuplicidadeEmail(email);

      // Assert
      expect(resultado).toEqual(true);
      expect(mockRepositorioUsuario.buscarPorEmail).toHaveBeenCalledWith(email);
    });
  });

  describe('Validar duplicidade e-mail', () => {
    it('Deveria retornar que email não é duplicado', async () => {
      // Arrange
      const email = 'teste@nexen.com';

      mockRepositorioUsuario.buscarPorEmail.mockResolvedValue(undefined);

      // Act
      const resultado = await validadorUsario.verificaDuplicidadeEmail(email);

      // Assert
      expect(resultado).toEqual(false);
      expect(mockRepositorioUsuario.buscarPorEmail).toHaveBeenCalledWith(email);
    });
  });
});
