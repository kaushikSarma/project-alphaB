/**
 * Created by Plato on 1/23/2017.
 */
(function($d, $){
    var $Objects = {},
        Functions = {
            TranslateToFrench: function(){
                var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fr&dt=t&q=' + encodeURI($Objects.inputTextField.val());
                $.ajax({
                    url: url,
                    type: 'get',
                    complete: Functions.ReTranslateToEnglish
                });
            },
            ReTranslateToEnglish: function(data){
                var s = '',
                    i = 4;
                while(data.responseText[i] !== '"')
                {
                    s += data.responseText[i];
                    i++;
                }
                $Objects.outputTextField.val(s);
                console.log(data.responseText);
            }
        };
    $d.ready(function(){
        $Objects.inputTextField = $('#input-text');
        $Objects.outputTextField = $('#output-text');
        $Objects.submitButton = $('#paraphrase-submit');
        $Objects.submitButton.on('click', Functions.TranslateToFrench);
    });
})(jQuery(document), jQuery);