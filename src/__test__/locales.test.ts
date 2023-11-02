import { i18n, set } from '../locales';

describe('国际化功能测试', () => {
  describe('设置语言包', () => {
    it('应该能够正确设置存在的语言包', () => {
      set('en_US');
      expect(i18n('common.exit')).toBe('Exit');
    });

    it('在尝试设置不存在的语言包时，应该默认使用中文', () => {
      set('non_existent_locale');
      expect(i18n('common.exit')).toBe('退出');
    });
  });

  describe('翻译功能', () => {
    it('应该能够正确翻译存在的键', () => {
      set('zh_CN');
      expect(i18n('common.exit')).toBe('退出');
    });

    it('在尝试翻译不存在的键时，应该返回原键', () => {
      expect(i18n('non.existent.key')).toBe('non.existent.key');
    });

    it('应该能够正确替换参数', () => {
      set('en_US');
      expect(i18n('loading.upgradingVersion', 'Software', '1.2.3')).toBe('Upgrading Software to: v1.2.3 ...');
    });

    it('在键对应的值不是字符串时，应该返回原键', () => {
      expect(i18n('version.tips')).toBe('version.tips');
    });
  });
});
