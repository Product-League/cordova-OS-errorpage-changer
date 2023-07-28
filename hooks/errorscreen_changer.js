const utils = require("./utils");

module.exports = function (context) {

  const confs = utils.getConfigs();
  const scriptToReplace = '})();</script>';

  let errorFileContent1 = utils.readErrorFile(context.opts.projectRoot + confs.androidPath + confs.errorFile1);
  let errorFileContent2 = utils.readErrorFile(context.opts.projectRoot + confs.androidPath + confs.errorFile2);

  utils.errorFileReplacer(context.opts.projectRoot + confs.androidPath + confs.errorFile1, errorFileContent1, confs.textToReplace, '');
  errorFileContent1 = utils.readErrorFile(context.opts.projectRoot + confs.androidPath + confs.errorFile1);
  utils.errorFileReplacer(context.opts.projectRoot + confs.androidPath + confs.errorFile1, errorFileContent1, scriptToReplace, 'function onDeviceReady() {            document.addEventListener("backbutton", function(e)       {        e.preventDefault();console.log("clicked");    }, false);    }window.onload = onDeviceReady();' + scriptToReplace);
  
  utils.errorFileReplacer(context.opts.projectRoot + confs.androidPath + confs.errorFile2, errorFileContent2, confs.textToReplace, '');
}
