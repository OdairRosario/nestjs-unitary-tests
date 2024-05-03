export interface ValidadorUsuarioInterface {
  verificaDuplicidadeEmail(email: string): Promise<boolean>;
}
