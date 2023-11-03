/**
 * 马来语 (马来西亚)：ms_MY
 * @description 马来语 (马来西亚)语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:41:21
 */

export default {
  common: {
    error: 'Perintah pelaksanaan gagal: {0}',
    syncCompleted: 'Lengkap sepenuhnya.',
    invalidChoice: 'Pilihan tidak sah',
    executionSucceeded: 'Pelaksanaan berjaya',
    executionFailed: 'Kegagalan pelaksanaan',
    backToMenu: 'kembali',
    exit: 'berhenti'
  },
  loading: {
    revokingCurrent: 'Versi semasa sedang dibatalkan ...',
    revokingVersion: 'Versi Revisible: v{0} ...',
    specificVersion: 'Tentukan versi sebagai: v{0} ...',
    upgradingVersion: 'Naik tarafv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versi utama',
    minor: 'Versi sekunder',
    patch: 'Patch',
    tips: {
      firstTimePrompt: 'Oleh kerana anda belum mengeluarkan versi, anda perlu melepaskannya untuk kali pertama.',
      failedToIncrement: 'Tidak dapat meningkatkan nombor versi',
      invalidVersionField: 'Bidang versi dalam pakej.json hilang atau tidak sah',
      enterInitialVersion: 'Sila masukkan nombor versi awal anda, lalai 0.0.1:',
      error: 'Sila masukkan nombor versi semantik yang berkesan, contohnya: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Apa yang awak akan lakukan?',
      upgradeVersion: 'versi terkini',
      specificVersion: 'Versi yang ditentukan',
      revokeVersion: 'Versi yang ditolak'
    },
    upgrade: {
      prompt: 'Versi mana yang anda rancangkan untuk menaik taraf',
      confirmPush: 'Sama ada untuk menolak versi ke gudang'
    },
    specificVersion: {
      prompt: 'Sila masukkan nombor versi:',
      confirm: 'Nombor versi semasa anda ialah: v{0}, sahkan bahawa anda memasukkan nombor versi yang ditentukan: v{1}'
    },
    revoke: {
      prompt: 'Versi mana yang anda rancangkan untuk dibatalkan',
      currentVersion: 'versi terkini',
      specificVersion: 'Versi yang ditentukan'
    },
    revokeCurrentVersion: {
      retainChanges: 'Rizab perubahan fail, hanya nombor versi yang dibatalkan',
      confirm: 'Nombor versi semasa anda ialah: v{0}, selepas pembatalan: v{1}, adakah anda meneruskan?'
    },
    revokeSpecificVersion: {
      prompt: 'Sila masukkan nombor versi yang akan dibatalkan:',
      retainChanges: 'Rizab perubahan fail, hanya nombor versi yang dibatalkan',
      confirm: 'Nombor versi semasa anda ialah: v{0}, selepas pembatalan: v{1}, adakah anda meneruskan?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Sama ada nombor versi dalam fail pakej.json: v{0} dikemas kini sebagai nombor versi yang dibatalkanv{1}',
      failedToRetrieve:
        'Tidak mustahil untuk mendapatkan nombor versi dari penyerahan sebelumnya, dan nombor versi dalam fail Package.json tidak diubahsuai buat masa ini. Jika perlu, sila ubah secara manual.'
    }
  }
};
