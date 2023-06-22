var app = new Vue({
  el: '#app',
  data: {
    payments: [
      {
        title: '信用卡/金融卡',
        imgUrl: './image/credit-card.svg',
        imgW: '69px',
        imgH: '49px',
        marginTop: '33px',
      },
      {
        title: '銀聯卡',
        imgUrl: './image/unionpay.svg',
        imgW: '99px',
        imgH: '42px',
        marginTop: '38px',
      },
      {
        title: '超商付款',
        imgUrl: './image/shop.svg',
        imgW: '74px',
        imgH: '53px',
        marginTop: '32px',
      },
      {
        title: 'Web ATM',
        imgUrl: './image/web-atm.svg',
        imgW: '61px',
        imgH: '61px',
        marginTop: '25px',
      },
      {
        title: 'ATM 轉帳',
        imgUrl: './image/atm.svg',
        imgW: '80px',
        imgH: '41px',
        marginTop: '39px',
      },
    ],
    stepTitle: 'STEP1. 選擇付款方式',
    step: 1,
    payment: '',
    cardNum: '',
    finish: false,
    shopDetail: [
      {
        title: '付款超商 :',
        value: '',
      },
      {
        title: '付款代碼 :',
        value: '',
      },
      {
        title: '付款期限 :',
        value: '',
      },
    ],
    atmDetail: [
      {
        title: '付款銀行 :',
        value: '',
      },
      {
        title: '匯款帳號(郵局700) :',
        value: '3388222-1234567',
      },
      {
        title: '付款期限 :',
        value: '',
      },
    ],
    show: false,
  },
  watch: {
    step: function () {
      if (this.step == 1) {
        this.stepTitle = 'STEP1. 選擇付款方式';
      } else if (this.step == 2) {
        this.stepTitle = 'STEP2. 填寫付款資訊';
      } else if (this.step == 3 && this.payment.title.indexOf('卡') == -1) {
        this.stepTitle = '您的訂單已成立！';
        this.finish = true;
      } else {
        this.stepTitle = '您的訂單已完成付款！';
        this.finish = true;
      }
    },
  },
  computed: {
    cardType: function () {
      const vm = this;
      if (vm.cardNum) {
        const str = vm.cardNum;
        if (str.substr(0, 1) == 3) {
          return 'jcb';
        } else if (str.substr(0, 1) == 4) {
          return 'visa';
        } else if (str.substr(0, 1) == 5) {
          return 'mastercard';
        }
      }
    },
  },
  methods: {
    nextStep() {
      const vm = this;
      if (vm.step == 1) {
        if (vm.payment) {
          vm.step += 1;
        } else {
          alert('請選擇付款方式！');
        }
      }
    },
    submitForm() {
      const vm = this;
      $('.form')
        .validator()
        .on('submit', function (e) {
          if (e.isDefaultPrevented()) {
            return;
          } else {
            vm.step = 3;
          }
          e.preventDefault();
        });
      if (vm.payment.title == '超商付款') {
        vm.shopDetail[1].value = Math.random()
          .toString(36)
          .substr(2)
          .toUpperCase();
        var d = new Date();
        d.setDate(d.getDate() + 3);
        let mm = d.getMonth() + 1;
        if (mm < 10) {
          mm = '0' + mm;
        }
        const ret = d.getFullYear() + '-' + mm + '-' + d.getDate();
        vm.shopDetail[2].value = ret + ' 23:59:59';
      } else if (vm.payment.title.indexOf('ATM') !== -1) {
        if (vm.atmDetail[0].value == '玉山銀行') {
          vm.atmDetail[0].link =
            'https://netbank.esunbank.com.tw/webatm/#/login';
        } else if (vm.atmDetail[0].value == '國泰世華') {
          vm.atmDetail[0].link = 'https://www.mybank.com.tw/mywebatm/main';
        } else if (vm.atmDetail[0].value == '中國信託') {
          vm.atmDetail[0].link = 'https://eatm.ctbcbank.com/WebATM/';
        } else if (vm.atmDetail[0].value == '富邦銀行') {
          vm.atmDetail[0].link =
            'https://ebank.taipeifubon.com.tw/EXT/common/CWA/Index.faces';
        }
        var d = new Date();
        d.setDate(d.getDate() + 3);
        const ret =
          d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        vm.atmDetail[2].value = ret + ' 23:59:59';
      }
    },
  },
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('.l-hideOrder').height($('.l-order').height());
});
