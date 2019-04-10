uniform lowp sampler2D _Splat0;
uniform lowp sampler2D _Splat1;
uniform lowp sampler2D _Splat2;
uniform lowp sampler2D _Splat3;
uniform lowp sampler2D _Control;

varying lowp vec2 xlv_TEXCOORD0;
varying lowp vec2 xlv_TEXCOORD1;
varying lowp vec2 uv_Splat0;
varying lowp vec2 uv_Splat1;
varying lowp vec2 uv_Splat2;
varying lowp vec2 uv_Splat3;
lowp vec3 decode_hdr(lowp vec4 data)
{
    lowp float power =pow( 2.0 ,data.a * 255.0 - 128.0);
    return data.rgb * power * 2.0 ;
}
void main() 
{
    lowp vec4 control = texture2D(_Control, xlv_TEXCOORD0);
    lowp vec3 lay1 = texture2D(_Splat0,uv_Splat0).xyz;
    lowp vec3 lay2 = texture2D(_Splat1,uv_Splat1).xyz;
    lowp vec3 lay3 = texture2D(_Splat2,uv_Splat2).xyz;
    lowp vec3 lay4 = texture2D(_Splat3,uv_Splat2).xyz;
    lowp vec4 outColor = vec4(lay1*control.r + lay2*control.g + lay3*control.b + lay4*(control.a),1.0);

    gl_FragData[0] = outColor;
}