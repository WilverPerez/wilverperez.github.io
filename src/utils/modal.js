class Modal {

  constructor(){
    this.initializeEventListenner();
  }

  initializeEventListenner() {
    $('#modal').click(()=> $('#modal').modal('hide'))
  }

    buildModal(data) {
        return `<div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">${data.title}</h5>
          </div>
          
          <div class="modal-body p-2">
          <div id="badge-contain">
          </div>
          <hr class="w-100"/>
            <div id="body-contain" class="p-2">
              ${data.detail}
            </div>
          </div>
        </div>
      </div>`;
    }

    openModal(data) {
        $('#modal').html(this.buildModal(data));
        $('#modal').modal('show');
    }
}