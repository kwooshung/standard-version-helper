/**
 * 韩语/朝鲜语：ko_KR
 * @description 韩语/朝鲜语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:33:01
 */

export default {
  common: {
    error: '실행 명령에 실패 : {0}',
    syncCompleted: '완전히 완료됩니다.',
    invalidChoice: '잘못된 선택',
    executionSucceeded: '실행 성공',
    executionFailed: '실행 실패',
    backToMenu: '반품',
    exit: '그만두다'
  },
  loading: {
    revokingCurrent: '현재 버전이 취소되고 있습니다 ...',
    revokingVersion: '재 방문 버전 : v{0} ...',
    specificVersion: '버전을 다음과 같이 지정합니다.v{0} ...',
    upgradingVersion: '업그레이드v{0} : v{1} > v{2} ...'
  },
  version: {
    major: '메인 버전',
    minor: '보조 버전',
    patch: '반점',
    tips: {
      firstTimePrompt: '버전을 해제하지 않았으므로 처음으로 버전을 해제해야합니다.',
      failedToIncrement: '버전 번호를 증가시킬 수 없습니다',
      invalidVersionField: 'package.json의 버전 필드가 누락되거나 유효하지 않습니다',
      enterInitialVersion: '초기 버전 번호, 기본 0.0.1을 입력하십시오.',
      error: '예를 들어 효과적인 시맨틱 버전 번호를 입력하십시오.v{0}'
    }
  },
  menus: {
    main: {
      prompt: '당신은 무엇을 할 건가요?',
      upgradeVersion: '업데이트 된 버전',
      specificVersion: '지정된 버전',
      revokeVersion: '거부 된 버전'
    },
    upgrade: {
      prompt: '업그레이드 할 버전',
      confirmPush: '버전을 창고로 밀어야하는지 여부'
    },
    specificVersion: {
      prompt: '버전 번호를 입력하십시오 :',
      confirm: '현재 버전 번호는 다음과 같습니다.v{0}, 지정된 버전 번호를 입력했는지 확인하십시오 : v{1}'
    },
    revoke: {
      prompt: '어떤 버전을 취소 할 계획입니까?',
      currentVersion: '현재 버전',
      specificVersion: '지정된 버전'
    },
    revokeCurrentVersion: {
      retainChanges: '파일 변경을 예약하면 버전 번호 만 취소됩니다.',
      confirm: '현재 버전 번호는 다음과 같습니다.v{0}, 취소 후 : v{1}, 계속합니까?'
    },
    revokeSpecificVersion: {
      prompt: '취소 할 버전 번호를 입력하십시오.',
      retainChanges: '파일 변경을 예약하면 버전 번호 만 취소됩니다.',
      confirm: '현재 버전 번호는 다음과 같습니다.v{0}, 취소 후 : v{1}, 계속합니까?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'package.json 파일의 버전 번호가 여부 : v{0}은 취소 된 버전 번호v{1}으로 업데이트됩니다.',
      failedToRetrieve: '이전 제출에서 버전 번호를 검색하는 것은 불가능하며 Package.json 파일의 버전 번호는 당분간 수정되지 않았습니다. 필요한 경우 수동으로 수정하십시오.'
    }
  }
};
