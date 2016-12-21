
import java.util.ArrayList;
public class ImageFilterManager
{
	private ArrayList<ImageFilter>images= new ArrayList<ImageFilter>();

	public ImageFilterManager()
	{

	}

	public void addImages(ImageFilter image)
	{
		images.add(image);
	}


	public ImageFilter searchByDesignerName(String designerName)
	{
		for(int i=0;i<ImageFilter.size(); i++)
		{
			if(images.get(i).getdesingerName().equalsIgnoreCase(designerName))
			{
				return images.get(i);
			}
			
		}
		return null;
	}


}