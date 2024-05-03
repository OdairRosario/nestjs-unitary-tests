import { TestBed } from '@automock/jest';
import { RepositorioUsuario } from '../usuario.repository';
import { RepositorioUsuarioInterface } from '../interfaces/repositorio-usuario.interface';
import { Usuario } from '../entidades/usuario.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Testes repositório do usuário', () => {
  let repositorioUsuario: RepositorioUsuarioInterface;
  let mockRepositorioUsuario: jest.Mocked<Repository<Usuario>>;
  const repositoryToken = getRepositoryToken(Usuario).toString();

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(RepositorioUsuario).compile();

    repositorioUsuario = unit;
    mockRepositorioUsuario = unitRef.get(repositoryToken);
  });

  describe('Listar por email', () => {
    it('Deveria retornar um usuario por email', async () => {
      // Arrange
      const email = 'teste@nexen.com';

      const mockUsuario: Usuario = {
        id: 1,
        nome: 'Teste',
        email: 'teste@nexen.com',
      };

      const filtro: FindOneOptions<Usuario> = {
        where: {
          email: email,
        },
      };

      mockRepositorioUsuario.findOne.mockImplementationOnce(() =>
        Promise.resolve(mockUsuario),
      );

      // Act
      const resultado = await repositorioUsuario.buscarPorEmail(email);

      // Assert
      expect(resultado.email).toEqual(email);
      expect(resultado).toEqual(mockUsuario);
      expect(mockRepositorioUsuario.findOne).toHaveBeenCalledWith(filtro);
    });

    it('Deveria retornar undefined', async () => {
      // Arrange
      const email = 'testeNexen@nexen.com';

      const filtro: FindOneOptions<Usuario> = {
        where: {
          email: email,
        },
      };

      mockRepositorioUsuario.findOne.mockResolvedValue(undefined);

      // Act
      const resultado = await repositorioUsuario.buscarPorEmail(email);

      // Assert
      expect(resultado).toBeUndefined();
      expect(mockRepositorioUsuario.findOne).toHaveBeenCalledWith(filtro);
    });
  });
});
