import { StartedTestContainer, GenericContainer, Wait } from 'testcontainers';
import { describe, it, beforeAll, expect, afterAll } from '@jest/globals';

describe('DynamoDB', () => {
    let startedContainer: StartedTestContainer;

    beforeAll(async () => {
        startedContainer = await new GenericContainer("amazon/dynamodb-local")
        .withExposedPorts(8000)
        .withCommand(["-jar", "DynamoDBLocal.jar", "-inMemory", "-sharedDb"])
        .withWaitStrategy(Wait.forLogMessage('Initializing DynamoDB Local with the following configuration'))
        .start();
    });

    it('should be able to start a DynamoDB container', async () => {
        expect(startedContainer).toBeDefined();
        console.log(startedContainer.getMappedPort(8000));
    });

    afterAll(async () => {
        await startedContainer.stop();
    });
});