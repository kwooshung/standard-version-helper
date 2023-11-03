/**
 * 印度尼西亚语：id_ID
 * @description 印度尼西亚语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:20:40
 */

export default {
  common: {
    error: 'Perintah eksekusi gagal: {0}',
    syncCompleted: 'Sepenuhnya lengkap.',
    invalidChoice: 'Pilihan tidak valid',
    executionSucceeded: 'eksekusi berhasil',
    executionFailed: 'Kegagalan eksekusi',
    backToMenu: 'kembali',
    exit: 'berhenti'
  },
  loading: {
    revokingCurrent: 'Versi saat ini sedang dicabut ...',
    revokingVersion: 'Versi Revisible: v{0} ...',
    specificVersion: 'Tentukan versi sebagai: v{0} ...',
    upgradingVersion: 'Tingkatkan{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versi utama',
    minor: 'Versi sekunder',
    patch: 'Tambalan',
    tips: {
      firstTimePrompt: 'Karena Anda belum merilis versi, Anda perlu merilisnya untuk pertama kalinya.',
      failedToIncrement: 'Tidak dapat meningkatkan nomor versi',
      invalidVersionField: 'Bidang versi dalam package.json hilang atau tidak valid',
      enterInitialVersion: 'Harap masukkan nomor versi awal Anda, default 0.0.1:',
      error: 'Harap masukkan nomor versi semantik yang efektif, misalnya: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Apa yang akan kamu lakukan?',
      upgradeVersion: 'versi terbaru',
      specificVersion: 'Versi yang ditentukan',
      revokeVersion: 'Versi yang ditolak'
    },
    upgrade: {
      prompt: 'Versi mana yang Anda rencanakan untuk ditingkatkan',
      confirmPush: 'Apakah akan mendorong versi ke gudang'
    },
    specificVersion: {
      prompt: 'Harap masukkan nomor versi:',
      confirm: 'Nomor versi Anda saat ini adalah: v{0}, konfirmasi bahwa Anda memasukkan nomor versi yang ditentukan: v{1}'
    },
    revoke: {
      prompt: 'Versi mana yang Anda rencanakan untuk dicabut',
      currentVersion: 'versi sekarang',
      specificVersion: 'Versi yang ditentukan'
    },
    revokeCurrentVersion: {
      retainChanges: 'Cadangan perubahan file, hanya nomor versi yang dicabut',
      confirm: 'Nomor versi Anda saat ini adalah: v{0}, setelah pembatalan: v{1}, apakah Anda melanjutkan?'
    },
    revokeSpecificVersion: {
      prompt: 'Harap masukkan nomor versi yang akan dicabut:',
      retainChanges: 'Cadangan perubahan file, hanya nomor versi yang dicabut',
      confirm: 'Nomor versi Anda saat ini adalah: v{0}, setelah pembatalan: v{1}, apakah Anda melanjutkan?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Apakah nomor versi dalam file package.json: v{0} diperbarui sebagai nomor versi yang dicabutv{1}',
      failedToRetrieve:
        'Tidak mungkin untuk mengambil nomor versi dari pengiriman sebelumnya, dan nomor versi dalam file package.json tidak dimodifikasi untuk saat ini. Jika perlu, harap modifikasi secara manual.'
    }
  }
};
