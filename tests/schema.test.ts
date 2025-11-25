import * as fs from 'fs';
import * as path from 'path';
import { assert } from 'chai';

describe('Prisma schema', () => {
  it('should have consistent timestamp precision for User model', () => {
    const schemaPath = 'prisma/schema.prisma';
    const schema = fs.readFileSync(schemaPath, 'utf-8');

    const userModelRegex = /model\s+User\s+\{([\s\S]*?)\}/;
    const userModelMatch = schema.match(userModelRegex);
    assert.isNotNull(userModelMatch, 'User model not found in schema');

    const userModel = userModelMatch[1];
    const updatedAtRegex = /updatedAt\s+DateTime\s+@updatedAt\s+@db\.Timestamp\(6\)/;
    const updatedAtMatch = userModel.match(updatedAtRegex);

    assert.isNotNull(updatedAtMatch, 'updatedAt field does not have @db.Timestamp(6)');
  });
});
