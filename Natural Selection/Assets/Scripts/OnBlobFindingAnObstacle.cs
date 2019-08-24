using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OnBlobFindingAnObstacle : MonoBehaviour
{

    void OnTriggerEnter2D(Collider2D other)
    {
        string tag = other.gameObject.tag;
        if (tag == "obstacle")
        {
            Transform parent = gameObject.transform.parent;
            BlobController script = parent.GetComponent(typeof(BlobController)) as BlobController;
            script.ChangeDirectionRandom();
        }

    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
