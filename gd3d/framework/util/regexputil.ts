namespace gd3d.framework
{
    /**
     * @private
     * @language zh_CN
     * @classdesc
     * 正则表达式的工具类，提供一些引擎用到的正则表达式
     * @version egret-gd3d 1.0
     */
    export class RegexpUtil
    {
        //shader properties
        public static textureRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\)[ ]*=[ ]*'(.+)'[ ]*\{[ ]*([a-zA-Z]*)[ ]*([a-zA-Z]*)[ ]*\}/;
        public static vectorRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\)[ ]*=[ ]*\([ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*\)/;
        public static floatRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\)[ ]*=[ ]*([0-9.-]+)/;
        public static rangeRegexp = /([_0-9a-zA-Z]+)[ ]*\([ ]*'(.+)'[ ]*,[ ]*([0-9a-zA-Z]+)[ ]*\([ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*\)[ ]*\)[ ]*=[ ]*([0-9.-]+)/;

        //material
        public static vector4Regexp = /\([ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*,[ ]*([0-9.-]+)[ ]*\)/;

        //特效解析，[1,2],2,1
        public static vector3FloatOrRangeRegexp = /([0-9.-]+|\[[0-9.-]+,[0-9.-]+\]),([0-9.-]+|\[[0-9.-]+,[0-9.-]+\]),([0-9.-]+|\[[0-9.-]+,[0-9.-]+\])/;

    }
}