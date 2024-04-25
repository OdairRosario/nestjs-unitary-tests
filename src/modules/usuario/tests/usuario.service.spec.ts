import { Test, TestingModule } from '@nestjs/testing';
import { ServicoUsuario } from '../usuario.service';

describe('ServicoUsuario', () => {
  let service: ServicoUsuario;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicoUsuario],
    }).compile();

    service = module.get<ServicoUsuario>(ServicoUsuario);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
