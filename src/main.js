window.addEventListener('error', function (ev) {
  document.getElementById('err').innerText = ev.error
})

function addText(id, text) {
  var content = document.getElementById(id).innerText
  document.getElementById(id).innerText = content + ' ' + text;
}

window.addEventListener('load', function (ev) {
  addText('on-window-load', new Date().getTime())
});

document.addEventListener('webOSLaunch', function () {
  // This event is fired when an app is launched.
  addText('on-webos-launch', new Date().getTime())
})

webOS.service.request('luna://com.palm.connectionmanager', {
  method: 'getStatus',
  onSuccess: function (r) {
    addText('on-connectionmanager-status', 'isInternetConnectionAvailable: ' + r.isInternetConnectionAvailable)
  },
  onFailure: function (inError) {
    console.log('Failed to get network state');
    console.log('[' + inError.errorCode + ']: ' + inError.errorText);

    return;
  },
});
