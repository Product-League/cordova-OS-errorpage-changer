const utils = require("./utils");

module.exports = function (context) {

  const confs = utils.getConfigs();
  const scriptToReplace = '})();</script>';

  let errorFileContent1 = utils.readErrorFile(context.opts.projectRoot + confs.iosPath + confs.errorFile1);
  let errorFileContent2 = utils.readErrorFile(context.opts.projectRoot + confs.iosPath + confs.errorFile2);

  utils.errorFileReplacer(context.opts.projectRoot + confs.iosPath + confs.errorFile1, errorFileContent1, confs.textToReplace, '');
  errorFileContent1 = utils.readErrorFile(context.opts.projectRoot + confs.iosPath + confs.errorFile1);
  utils.errorFileReplacer(context.opts.projectRoot + confs.iosPath + confs.errorFile1, errorFileContent1, scriptToReplace, 'document.addEventListener("backbutton", function (e) {e.preventDefault();}, false );})();</script>');
  
  utils.errorFileReplacer(context.opts.projectRoot + confs.iosPath + confs.errorFile2, errorFileContent2, confs.textToReplace, '');

}
