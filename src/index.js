import { App } from 'vue';

export function createTestPlugin () {
  return new TestPlugin();
}

class TestPlugin {

  install (app) {
    // do something with app
  }
}
