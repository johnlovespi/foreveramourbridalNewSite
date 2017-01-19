(function() {
  'use strict';

angular.module('DesignerService', ['DesignerValue'])

.factory('DesignerListFactory', function(){
	function DesignerListFactory(array){
		this.designerArray = array/// ends designer array
	};/// ends designerlistFactory function()

	DesignerListFactory.prototype.filterImages = function(){
		this.filterImagesArray = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designers = this.designerArray[i].gallery;
			for(var j = 0; j < this.designers.length; j ++){
				this.designersGallery = this.designers[j];
				this.filterImagesArray.push(this.designersGallery);
			}
		}
	};

	DesignerListFactory.prototype.onlyExclusive = function(){
		this.exclusive = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designer = this.designerArray[i];
			if(this.designer.featureOrExclusive === "exclusive") {
				this.isExclusive = this.designer;
				this.exclusive.push(this.isExclusive);
			}
		}
		this.exclusiveArray = this.exclusive;
		return this.exclusiveArray;
	};

	DesignerListFactory.prototype.onlyFeature = function(){
		this.feature = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designer = this.designerArray[i];
			if(this.designer.featureOrExclusive === "feature") {
				this.isFeature = this.designer;
				this.feature.push(this.isFeature);
			}
		}
		this.featureArray = this.feature;
		return this.featureArray;
	};

	DesignerListFactory.prototype.removeJude = function(){
		this.arrayWithoutJude = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.name = this.designerArray[i];
			if(this.name.name != "Jude Jowilson") {
				this.notJude = this.name;
				this.arrayWithoutJude.push(this.notJude);
			}
		}
		this.designerArray = this.arrayWithoutJude;
		return this.designerArray;
	};

	DesignerListFactory.prototype.justJude = function(){
		this.justJudeArray = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.name = this.designerArray[i];
			if(this.name.name === "Jude Jowilson") {
				this.yesJude = this.name;
				this.justJudeArray.push(this.yesJude);
			}
		}
		this.designerArray = this.justJudeArray;
		return this.designerArray;
	};

	DesignerListFactory.prototype.viewDesignerGallery = function(designer) {
		// console.log(this.designerArray);
		for(var i = 0; i < this.designerArray.length; i++ ){
			this.name = this.designerArray[i];
			if(this.name.name === designer){
				this.designGalleryArray = [];
				this.nameGallery = this.name.gallery;
				this.designGalleryArray = this.nameGallery;
			}
		}
		return this.designGalleryArray;
	};

	return DesignerListFactory;
})//// ends designerlistfactory

.service('PaginateDesigner', function(DesignerListFactory, CollectionArray){
	var self = this;
	self.PaginateDesignerFunction = function(designer, page){
		self.designerPaginateArray = [];
		self.designerList = new DesignerListFactory(CollectionArray);
		self.designerImages = self.designerList.viewDesignerGallery(designer);
		self.records_per_page = 9;
		for (var i = (page-1) * self.records_per_page; i < (page * self.records_per_page) && i < self.designerImages.length; i++) {
			self.designerPaginateArray.push(self.designerImages[i]);
    	}
    	console.log(self.designerPaginateArray);
  		return self.designerPaginateArray;
	}

})


})();

