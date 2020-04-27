/* config-overrides.js */
const GzipWebpackPlugin = require('gzip-webpack-plugin');

module.exports = function override(config, env) {
	
	console.log("config---------------------",config);
  //do stuff with the webpack config...
/*   config.plugins.push(new GzipWebpackPlugin({
          
          // 压缩文件输出路径，默认process.cwd()
          outPath: process.cwd(),
    
          // 压缩文件输出名字，默认为webpack输出目录名称
          // filename: 'my_app',
    
          // 压缩文件扩展名，默认是.tar.gz
          extension: '.gzip',
          
          // 是否删除源文件, 默认为true    
          // delSource: true,
          
          // 输入需要压缩文件/文件夹名称正则、字符串或数组名称。默认会压缩webpack输出目录下得所有文件
          // include: [/\.js|.css/],
    
          // 不需要压缩的文件夹名称，配置同include
          // exclude: [/\.css/],
        }));
 */  return config;
}
sudo docker run -v /var/lib/jenkins/workspace:/app/workspace --privileged=true smart-mall-npm:v1.0.0 /bin/bash /app/project_sh/jenkins_project.sh react-template