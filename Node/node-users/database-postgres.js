import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listCarros() {

  }

  async createCarro(carro) {
      
    const carroId = randomUUID();
    const { marca, modelo, ano } = carro;

    await sql`insert into carros (id, marca, modelo, ano) 
              values (${carroId}, ${marca}, ${modelo}, ${ano})`;
  }

  async updateCarro(id, carro) {
    const { marca, modelo, ano } = carro;
    await sql`update carros 
              set marca = ${marca}, modelo = ${modelo}, ano = ${ano} 
              where id = ${id}`;
  }

  async deleteCarro(id) {
    await sql`delete from carros where id = ${id}`; 
  }

}