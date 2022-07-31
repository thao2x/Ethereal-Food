<template>
	<div>
		<div>
			<b-button v-b-modal.modal-center>Launch centered modal</b-button>

			<b-modal id="modal-center" centered title="">
				<p class="my-4">Vertically centered modal!</p>
			</b-modal>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>

	.modal-header{
		border: none;
	}
	.modal-footer{
		border: none;
	}
</style>
