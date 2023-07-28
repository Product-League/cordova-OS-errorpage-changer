const utils = require("./utils");

module.exports = function (context) {

  const confs = utils.getConfigs();
  const scriptToReplace = 'appendMetaTagAttributes("viewport", "content", ["user-scalable=no", "minimum-scale=1.0"]);';

  let errorFileContent1 = utils.readErrorFile(context.opts.projectRoot + confs.androidPath + confs.errorFile1);
  let errorFileContent2 = utils.readErrorFile(context.opts.projectRoot + confs.androidPath + confs.errorFile2);

  utils.errorFileReplacer(context.opts.projectRoot + confs.androidPath + confs.errorFile1, errorFileContent1, confs.textToReplace, '');
  errorFileContent1 = utils.readErrorFile(context.opts.projectRoot + confs.androidPath + confs.errorFile1);
  utils.errorFileReplacer(context.opts.projectRoot + confs.androidPath + confs.errorFile1, errorFileContent1, scriptToReplace, scriptToReplace + '    window.onload = (e) => {        document.addEventListener("backbutton", function(e)         {          e.preventDefault();console.log("clicked");      }, false);        };');
  
  utils.errorFileReplacer(context.opts.projectRoot + confs.androidPath + confs.errorFile2, errorFileContent2, confs.textToReplace, '');
}
