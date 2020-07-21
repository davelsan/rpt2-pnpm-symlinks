import { App } from 'vue';

export function createTestPlugin (): TestPlugin {
  return new TestPlugin();
}

class TestPlugin {

  install (app: App) {
    // do something with app
  }
}
