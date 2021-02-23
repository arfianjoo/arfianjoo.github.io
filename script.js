function tambah() {
    const div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `
        <div class="col-md-12">
            <div class="box__content">
                <input type="button" class="btn btn-danger" value="Hapus" onclick="removeRow(this)">
            </div>
        </div>
    `;
    document.getElementById('box').appendChild(div);
}
function removeRow(input) {
    input.parentNode.remove()
}