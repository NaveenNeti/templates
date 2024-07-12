import { StartedPostgreSqlContainer, PostgreSqlContainer} from '@testcontainers/postgresql';
import { describe, it, beforeAll, expect, afterAll } from '@jest/globals';

describe('Postgres', () => {
    let startedContainer: StartedPostgreSqlContainer;

    beforeAll(async () => {
        startedContainer = await new PostgreSqlContainer()
        .withUsername('test')
        .withPassword('test')
        .withExposedPorts(5432)
        .withDatabase('test')
        .start();
    }, 30000);

    it('should be able to start a Postgres container', async () => {
        expect(startedContainer).toBeDefined();
        console.log(`Postgres is running on port ${startedContainer.getMappedPort(5432)}`);
    });

    afterAll(async () => {
        await startedContainer.stop();
    });
});