import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';

@Module({
  providers: [PedidoService],
})
export class PedidoModule {}
