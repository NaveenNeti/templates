import { StartedElasticsearchContainer, ElasticsearchContainer} from '@testcontainers/elasticsearch';
import { describe, it, beforeAll, expect, afterAll } from '@jest/globals';

describe('Elasticsearch', () => {
    let startedContainer: StartedElasticsearchContainer;

    beforeAll(async () => {
        startedContainer = await new ElasticsearchContainer()
        .start();
    }, 30000);

    it('should be able to start a Elasticsearch container', async () => {
        expect(startedContainer).toBeDefined();
        console.log(`Elasticsearch is running on port ${startedContainer.getMappedPort(9200)}`);
    });

    afterAll(async () => {
        await startedContainer.stop();
    });
});