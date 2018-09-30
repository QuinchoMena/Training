var TEMPLATE = 
'{{#companies}}\
<div class="boxAgent">\
    <div class="boxAgentsTitle">\
        <div class="boxAgentsTitle__name">{{name}}</div>\
        {{#isCertified}}\
        <div class="boxAgentsTitle__icon"></div>\
        {{/isCertified}}\
    </div>\
    <hr/>\
    <div class="boxAgentsContent">\
        <img class="boxAgentsContent__photo" src="{{image}}">\
        <div class="boxAgentsContent__description">{{description}}</div>\
    </div>\
    <div class="boxAgentSettings">\
        <div class="boxAgentSettings__price">Desde: {{rate}} / {{hours}} horas</div>\
        <div class="boxAgentSettings__button">Contratar</div>\
    </div>\
 </div>\
 {{/companies}}';