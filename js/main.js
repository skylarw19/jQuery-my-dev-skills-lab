const $addSkillBtn = $('#addSkill');
const $inpt = $('input');

$addSkillBtn.on('click', function(evt){
    let skillInp = $('input').val();
    let newSkill =
    `<tr>
      <td><button class="remove">X</button></td>
      <td class="skills">${skillInp}</td>
    </tr>`
    $('tbody').append(newSkill);
    $('input').val('');
});


$('table tbody').on('click', 'button', function() {
    $(this).closest('tr').remove();
});