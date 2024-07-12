import { StartedRedisContainer, RedisContainer} from '@testcontainers/redis';
import { describe, it, beforeAll, expect, afterAll } from '@jest/globals';

describe('Redis', () => {
    let startedContainer: StartedRedisContainer;

    beforeAll(async () => {
        startedContainer = await new RedisContainer()
        .start();
    }, 30000);

    it('should be able to start a Redis container', async () => {
        expect(startedContainer).toBeDefined();
        console.log(`Redis is running on port ${startedContainer.getMappedPort(6379)}`);
    });

    afterAll(async () => {
        await startedContainer.stop();
    });
});