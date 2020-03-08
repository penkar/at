import { Server } from 'miragejs';
import Sample from './Sample';

export default function mirageServer() {
  return new Server({
    routes() {
      this.namespace = '/api';

      this.get('/', () => (Sample));

      this.get('/section/:id', (_schema, request) => {
        const { id } = request.params;
        return Sample.filter((str) => (id === str.section || id === str.subSection));
      });

      this.get('/article/:id', (_schema, request) => {
        const { id } = request.params;
        return Sample.filter((str) => (id === str.id));
      });
    },
  });
}
