/**
 * 越南语：vi_VN
 * @description 越南语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 21:08:49
 */

export default {
  common: {
    error: 'Lệnh thực thi không thành công: {0}',
    syncCompleted: 'Hoàn thành hoàn toàn.',
    invalidChoice: 'Lựa chọn không hợp lệ',
    executionSucceeded: 'thực thi thành công',
    executionFailed: 'Thất bại thực thi',
    backToMenu: 'trở lại',
    exit: 'từ bỏ'
  },
  loading: {
    revokingCurrent: 'Phiên bản hiện tại đang bị thu hồi ...',
    revokingVersion: 'Phiên bản xem xét lại: v{0} ...',
    specificVersion: 'Chỉ định phiên bản là: v{0} ...',
    upgradingVersion: 'Nâng cấpv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Phiên bản chính',
    minor: 'Phiên bản thứ cấp',
    patch: 'Vá',
    tips: {
      firstTimePrompt: 'Vì bạn chưa phát hành phiên bản, bạn cần phát hành nó lần đầu tiên.',
      failedToIncrement: 'Không thể tăng số phiên bản',
      invalidVersionField: 'Các trường phiên bản trong pack.json bị thiếu hoặc không hợp lệ',
      enterInitialVersion: 'Vui lòng nhập số phiên bản ban đầu của bạn, mặc định 0.0.1:',
      error: 'Vui lòng nhập số phiên bản ngữ nghĩa hiệu quả, ví dụ: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Bạn định làm gì?',
      upgradeVersion: 'phiên bản cập nhật',
      specificVersion: 'Phiên bản được chỉ định',
      revokeVersion: 'Phiên bản bị từ chối'
    },
    upgrade: {
      prompt: 'Bạn dự định nâng cấp phiên bản nào',
      confirmPush: 'Có nên đẩy phiên bản vào kho'
    },
    specificVersion: {
      prompt: 'Vui lòng nhập số phiên bản:',
      confirm: 'Số phiên bản hiện tại của bạn là: v{0}, xác nhận rằng bạn nhập số phiên bản đã chỉ định: v{1}'
    },
    revoke: {
      prompt: 'Bạn dự định thu hồi phiên bản nào',
      currentVersion: 'Phiên bản hiện tại',
      specificVersion: 'Phiên bản được chỉ định'
    },
    revokeCurrentVersion: {
      retainChanges: 'Đặt trước sự thay đổi của các tệp, chỉ có số phiên bản bị thu hồi',
      confirm: 'Số phiên bản hiện tại của bạn là: v{0}, sau khi hủy: v{1}, bạn có tiếp tục không?'
    },
    revokeSpecificVersion: {
      prompt: 'Vui lòng nhập số phiên bản sẽ bị thu hồi:',
      retainChanges: 'Đặt trước sự thay đổi của các tệp, chỉ có số phiên bản bị thu hồi',
      confirm: 'Số phiên bản hiện tại của bạn là: v{0}, sau khi hủy: v{1}, bạn có tiếp tục không?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Cho dù số phiên bản trong tệp pack.json: v{0} được cập nhật dưới dạng phiên bản bị thu hồi sốv{1}',
      failedToRetrieve:
        'Không thể truy xuất số phiên bản từ bản gửi trước đó và số phiên bản trong tệp gói.json không được sửa đổi trong thời điểm hiện tại. Nếu cần thiết, xin vui lòng sửa đổi thủ công.'
    }
  }
};
