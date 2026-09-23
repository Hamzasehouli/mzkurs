const fs = require('fs');
const path = require('path');

const name = process.argv[2];

if (!name) {
  console.error('Usage: npm run make:resource -- posts');
  process.exit(1);
}

const singular = name.endsWith('s') ? name.slice(0, -1) : name;
const pascal = singular.charAt(0).toUpperCase() + singular.slice(1);

const resourcePath = path.join('src', name);

fs.mkdirSync(resourcePath, { recursive: true });

function write(file, content) {
  fs.writeFileSync(path.join(resourcePath, file), content.trim() + '\n');
}

// Controller
write(
  `${name}.controller.ts`,
  `
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ${pascal}Service } from './${name}.service';

@Controller('${name}')
export class ${pascal}Controller {
  constructor(
    private readonly ${singular}Service: ${pascal}Service,
  ) {}

  @Get()
  findAll() {
    return this.${singular}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.${singular}Service.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.${singular}Service.create(body);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    return this.${singular}Service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.${singular}Service.remove(id);
  }
}
`,
);

// Service
write(
  `${name}.service.ts`,
  `
import { Injectable, NotFoundException } from '@nestjs/common';
import { ${pascal}Repository } from './${name}.repository';

@Injectable()
export class ${pascal}Service {
  constructor(
    private readonly ${singular}Repository: ${pascal}Repository,
  ) {}

  findAll() {
    return this.${singular}Repository.findAll();
  }

  async findOne(id: number) {
    const ${singular} = await this.${singular}Repository.findOne(id);

    if (!${singular}) {
      throw new NotFoundException(
        \`${pascal} \${id} not found\`,
      );
    }

    return ${singular};
  }

  create(body: any) {
    return this.${singular}Repository.create(body);
  }

  async update(id: number, body: any) {
    await this.findOne(id);

    return this.${singular}Repository.update(id, body);
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.${singular}Repository.remove(id);
  }
}
`,
);

// Repository
write(
  `${name}.repository.ts`,
  `
import { Injectable } from '@nestjs/common';

@Injectable()
export class ${pascal}Repository {
  findAll() {
    // TODO: get all ${name}
  }

  findOne(id: number) {
    // TODO: get one ${singular}
  }

  create(body: any) {
    // TODO: create ${singular}
  }

  update(id: number, body: any) {
    // TODO: update ${singular}
  }

  remove(id: number) {
    // TODO: delete ${singular}
  }
}
`,
);

// Module
write(
  `${name}.module.ts`,
  `
import { Module } from '@nestjs/common';
import { ${pascal}Controller } from './${name}.controller';
import { ${pascal}Service } from './${name}.service';
import { ${pascal}Repository } from './${name}.repository';

@Module({
  controllers: [${pascal}Controller],
  providers: [
    ${pascal}Service,
    ${pascal}Repository,
  ],
})
export class ${pascal}Module {}
`,
);

console.log(`✓ ${pascal} resource created`);
