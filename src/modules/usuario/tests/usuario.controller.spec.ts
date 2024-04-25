import { Test, TestingModule } from '@nestjs/testing';
import { ServicoUsuario } from '../usuario.service';

describe('ServicoUsuario', () => {
  let controller: ServicoUsuario;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicoUsuario],
    }).compile();

    controller = module.get<ServicoUsuario>(ServicoUsuario);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
