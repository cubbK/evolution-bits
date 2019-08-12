using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlobController : MonoBehaviour
{

    public float movementSpeed = 1f;
    private Vector2 direction = new Vector2(0, 1);
    public Vector2 Direction
    {
        get => Vector2.ClampMagnitude(direction, 1);
        set => direction = value;
    }
    // IsometricCharacterRenderer isoRenderer;

    Rigidbody2D rbody;
    int rotation = 0;

    private void Awake()
    {
        rbody = GetComponent<Rigidbody2D>();
        //isoRenderer = GetComponentInChildren<IsometricCharacterRenderer>();
    }


    // Update is called once per frame
    void FixedUpdate()
    {
        Vector2 currentPos = rbody.position;
        
        Vector2 movement = Direction * movementSpeed;
        Vector2 newPos = currentPos + movement * Time.fixedDeltaTime;
        //isoRenderer.SetDirection(movement);
        rbody.MovePosition(newPos);
    }
}

