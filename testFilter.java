public class testFilter
{
	public static void main(String[] args) 
	{	
		String[] i1Array = {"ball gown", "sheath", "on sale"};
		ImageFilter i1=new ImageFilter("Images/Collection_large/AK181_full.jpg", "Eddie K", i1Array);
		String[] i2Array = {"a-line", "fit and flare", "not on sale"};
		ImageFilter i2=new ImageFilter("Images/Collection_large/EddyK_1.jpg", "Justin Alexander", i2Array);
		String[] i3Array = {"trumpet", "sheath", "on sale"};
		ImageFilter i3=new ImageFilter("Images/Collection_large/EddyK_2.jpg", "Nicloe Spose", i3Array);
		
		ImageFilterManager imageList=new ImageFilterManager();
		imageList.addImages(i1);
		imageList.addImages(i2);
		imageList.addImages(i3);
		
		imageList.searchByDesignerName("Eddie K");


	}
}