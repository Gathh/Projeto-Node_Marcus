import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listUsers() {
    const busao = await sql`select * from busao`;
    return busao;
  }

  async createBusao(busao) {
    const id = randomUUID();
    console.log('id', id);
    const name = busao.name;
    const linha = busao.linha;
    const terminal = busao.terminal;
    const Av = busao.Av;
    
    await sql`insert into users (id, name, password, profile)
    values (${id}, ${name}, ${linha}, ${terminal}, ${Av})`
  }

  async updateBusao(id, busao) {
    const name = busao.name;
    const linha = busao.linha;
    const terminal = busao.terminal;
    const Av = busao.Av;

    await sql`update busao set 
        name = ${name},
        linha = ${linha},
        terminal = ${terminal},
        Av = ${Av}
        where id = ${id}
    `;
  }

  async deleteBusao(id) {
    await sql`delete from busao where id = ${id}`
  }

}