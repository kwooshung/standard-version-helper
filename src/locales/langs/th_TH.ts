/**
 * 泰语：th_TH
 * @description 泰语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 21:01:56
 */

export default {
  common: {
    error: 'คำสั่งดำเนินการล้มเหลว: {0}',
    syncCompleted: 'เสร็จสมบูรณ์อย่างสมบูรณ์',
    invalidChoice: 'ตัวเลือกที่ไม่ถูกต้อง',
    executionSucceeded: 'การดำเนินการสำเร็จ',
    executionFailed: 'ความล้มเหลวในการดำเนินการ',
    backToMenu: 'กลับ',
    exit: 'ล้มเลิก'
  },
  loading: {
    revokingCurrent: 'เวอร์ชันปัจจุบันถูกเพิกถอน ...',
    revokingVersion: 'เวอร์ชันที่ผ่านการแก้ไขได้: v{0} ...',
    specificVersion: 'ระบุเวอร์ชันเป็น: v{0} ...',
    upgradingVersion: 'อัปเกรด{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'เวอร์ชันหลัก',
    minor: 'รุ่นรอง',
    patch: 'ปะ',
    tips: {
      firstTimePrompt: 'เนื่องจากคุณยังไม่ได้เปิดตัวเวอร์ชันคุณต้องปล่อยมันเป็นครั้งแรก',
      failedToIncrement: 'ไม่สามารถเพิ่มหมายเลขเวอร์ชันได้',
      invalidVersionField: 'ฟิลด์เวอร์ชันใน package.json หายไปหรือไม่ถูกต้อง',
      enterInitialVersion: 'โปรดป้อนหมายเลขเวอร์ชันเริ่มต้นของคุณค่าเริ่มต้น 0.0.1:',
      error: 'โปรดป้อนหมายเลขเวอร์ชันความหมายที่มีประสิทธิภาพเช่น: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'คุณกำลังจะทำอะไร?',
      upgradeVersion: 'เวอร์ชันอัปเดต',
      specificVersion: 'เวอร์ชันที่ระบุ',
      revokeVersion: 'เวอร์ชันปฏิเสธ'
    },
    upgrade: {
      prompt: 'คุณวางแผนที่จะอัพเกรดเวอร์ชันใด',
      confirmPush: 'ไม่ว่าจะผลักดันเวอร์ชันไปยังคลังสินค้า'
    },
    specificVersion: {
      prompt: 'กรุณากรอกหมายเลขเวอร์ชัน:',
      confirm: 'หมายเลขเวอร์ชันปัจจุบันของคุณคือ: v{0} ยืนยันว่าคุณป้อนหมายเลขเวอร์ชันที่ระบุ: v{1}'
    },
    revoke: {
      prompt: 'คุณวางแผนที่จะเพิกถอนเวอร์ชันใด',
      currentVersion: 'เวอร์ชันปัจจุบัน',
      specificVersion: 'เวอร์ชันที่ระบุ'
    },
    revokeCurrentVersion: {
      retainChanges: 'จองการเปลี่ยนแปลงไฟล์',
      confirm: 'หมายเลขเวอร์ชันปัจจุบันของคุณคือ: v{0} หลังจากการยกเลิก: v{1} คุณดำเนินการต่อหรือไม่?'
    },
    revokeSpecificVersion: {
      prompt: 'โปรดป้อนหมายเลขเวอร์ชันที่จะเพิกถอน:',
      retainChanges: 'จองการเปลี่ยนแปลงไฟล์',
      confirm: 'หมายเลขเวอร์ชันปัจจุบันของคุณคือ: v{0} หลังจากการยกเลิก: v{1} คุณดำเนินการต่อหรือไม่?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'ไม่ว่าจะมีการอัปเดตหมายเลขเวอร์ชันใน package.json: v{0} เป็นหมายเลขเวอร์ชันที่เพิกถอนv{1}',
      failedToRetrieve: 'เป็นไปไม่ได้ที่จะดึงหมายเลขเวอร์ชันจากการส่งก่อนหน้านี้และหมายเลขเวอร์ชันในไฟล์ package.json ไม่ได้รับการแก้ไขในขณะนี้ หากจำเป็นโปรดแก้ไขด้วยตนเอง'
    }
  }
};
