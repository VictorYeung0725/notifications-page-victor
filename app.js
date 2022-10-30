const notification_number = document.querySelector('#notification-number');
const markRead = document.querySelector('#markRead');
const unRead = document.querySelectorAll('#unRead');
console.log(notification_number);
console.log(markRead);
console.log(unRead);

const removeUnRead = function () {
  unRead.forEach(function (red) {
    red.remove();
  });
  notification_number.textContent = 0;
};

markRead.addEventListener('click', removeUnRead);
